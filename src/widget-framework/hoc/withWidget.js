import {findInlineWidget} from "../services/widgetService";
import React, {useEffect, useState} from "react";
import Widgets from "../../widgets";

const withWidget = (Component) => {
  return function WidgetComponent(props) {
    const [widget, setWidget] = useState(null);
    const loadInlineWidget = async () => {
      setWidget(await findInlineWidget(Component.name))
    }
    useEffect(() => {
      loadInlineWidget();
    }, []);
    const WidgetComponent = widget && Widgets[widget.component];
    return (
      <>
        <Component {...props} />
        {widget && <WidgetComponent widget={widget}/>}
      </>
    );
  };
}

export default withWidget;
