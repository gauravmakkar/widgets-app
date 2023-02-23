import {useLocation} from "react-router-dom";
import {useNavigate} from "react-router";
import React, {useContext, useEffect, useState} from "react";
import { findWidgetByEvent, findWidgetByRoute } from "../services/widgetService";
import Widgets from "../../widgets";


export const WidgetContext = React.createContext(null);

const WidgetProvider = ({children}) => {
  let location = useLocation();
  const navigate = useNavigate();
  const [widget, setWidget] = useState(null);

  const loadWidgetForRoute = async (currentUrl) => {
    setWidget(await findWidgetByRoute(currentUrl));
  }

  /**
     * Will listen for route changes and check if any widget exists for the desired route.
     */
  useEffect(() => {
    loadWidgetForRoute(location.pathname)
  }, [location.pathname]);

  /**
     * Will check if the widget exists for a desired action.
     * @param type
     * @param action
     */
  const dispatcher = ({type, action}) => {
    findWidgetByEvent(type).then((widget)=>{
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

  return <WidgetContext.Provider value={{dispatcher: dispatcher}}>
    {children}
    {widget && <WidgetComponent {...widgetProps}/>}
  </WidgetContext.Provider>;
};

export const useWidgets = () => {
  return useContext(WidgetContext);
};

export default WidgetProvider;
