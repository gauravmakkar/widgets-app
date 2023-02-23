import {useLocation} from "react-router-dom";
import {useNavigate} from "react-router";
import React, {useContext, useEffect, useState} from "react";
import {findInlineWidget as findInlineWidgetService, findWidgetByEvent, findWidgetByRoute, getWidgets} from "../services/widgetService";
import Widgets from "../../widgets";
import useFetch from "../../hooks/useFetch";
import GenericError from "../../components/Error";
import Spinner from "../../components/Spinner";


export const WidgetContext = React.createContext(null);

const WidgetProvider = ({children}) => {
  let location = useLocation();
  const navigate = useNavigate();
  const [widget, setWidget] = useState(null);
  const [widgets, setWidgets] = useState([]);
  const {fetch: fetchWidgets, loading, error} = useFetch({
    load: getWidgets, onComplete: (list) => {
      setWidgets(list)
    }
  });

  useEffect(() => {
    fetchWidgets()
  }, []);

  const loadWidgetForRoute = async (currentUrl) => {
    setWidget(await findWidgetByRoute(widgets, currentUrl));
  }

  const findInlineWidget = async (component) => {
    return await findInlineWidgetService(widgets, component);
  }

  /**
     * Will listen for route changes and check if any widget exists for the desired route.
     */
  useEffect(() => {
    if (widgets.length > 0) {
      loadWidgetForRoute(location.pathname)
    }
  }, [widgets, location.pathname]);

  /**
     * Will check if the widget exists for a desired action.
     * @param type
     * @param action
     */
  const dispatcher = ({type, action}) => {
    findWidgetByEvent(widgets, type).then((widget)=>{
      if (!widget) {
        action();
      } else {
        setWidget({...widget, callback: action})
      }
    });
  }

  /**
     * Set the context that will be available in every widget.
     * @type {{navigate: NavigateFunction, widget: unknown, setWidget: (value: unknown) => void}}
     */
  const widgetProps = {
    done: (extensions) => {
      widget.callback && widget.callback(extensions)
      setWidget(null);
    },
    abort: () => {
      setWidget(null)
      if (widget.type !== "Interstitial") {
        navigate(-1)
      }
    },
    widget,
    navigate
  }

  const WidgetComponent = widget && Widgets[widget.component];

  return <WidgetContext.Provider value={{dispatcher: dispatcher, findInlineWidget: findInlineWidget}}>
    {error && <GenericError/>}
    {loading && <Spinner/>}
    {!error && !loading && children}
    {widget && <WidgetComponent {...widgetProps}/>}
  </WidgetContext.Provider>;
};

export const useWidgets = () => {
  return useContext(WidgetContext);
};

export default WidgetProvider;
