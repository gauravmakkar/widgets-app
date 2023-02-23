import React, {useEffect, useState} from "react";
import Widgets from "../../widgets";
import {useWidgets} from "../providers/WidgetProvider";

const withWidget = (Component) => {
  return function WidgetComponent(props) {
    const [widget, setWidget] = useState(null);
    const {findInlineWidget} = useWidgets();
    const loadInlineWidget = async () => {
      const found = await findInlineWidget(Component.name)
      found && setWidget(found)
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
