import {findInlineWidget} from "../services/widgetService";
import React from "react";
import Widgets from '../../widgets';

const withWidget = (Component) => {
    return function WidgetComponent(props) {
        const widget = findInlineWidget(Component.name);
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
