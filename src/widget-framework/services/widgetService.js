/**
 * This module is a simulation of the smart microservice which accepts the context and returns with all possible widgets to be shown in the whole user journey
 */

/**
 * This is the list of widgets possibly sourced from any widget authoring service.
 * @type {({component: string, id: number, type: string, title: string, matcher: [string, string]}|{component: string, id: number, title: string, type: string, event: string})[]}
 */


/**
 * This service returns the widget applicable for any page visit.
 * @param event
 * @returns {{component: string, id: number, type: string, title: string, matcher: string[]} | {component: string, id: number, title: string, type: string, event: string}}
 */
export const findWidgetByEvent = async (event) => {
  const response =  await fetch("/db/widgets.json");
  const widgets =  await response.json();
  return widgets.find((widget) => widget.event === event)
}

/**
 * This service returns the widget applicable to any user action.
 * @param route
 * @returns {{component: string, id: number, type: string, title: string, matcher: string[]} | {component: string, id: number, title: string, type: string, event: string}}
 */
export const findWidgetByRoute = async (route) => {
  const response =  await fetch("/db/widgets.json");
  const widgets =  await response.json();
  return widgets.filter((widget) => widget.type === "PAGE_VIEW").find((widget) => widget.matcher.indexOf(route) > -1);
}

/**
 * This service returns the inline widget applicable to any component.
 * @param componentName
 * @returns {{component: string, id: number, type: string, title: string, matcher: string[]} | {component: string, id: number, title: string, type: string, event: string}}
 */
export const findInlineWidget= async (componentName) => {
  const response =  await fetch("/db/widgets.json");
  const widgets =  await response.json();
  return widgets.filter((widget) => widget.type === "Inline").find((widget) => widget.matcher.indexOf(componentName) > -1);
}
