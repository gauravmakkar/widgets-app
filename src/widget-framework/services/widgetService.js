/**
 * This module is a simulation of the smart microservice which accepts the context and returns with all possible widgets to be shown in the whole user journey
 */

/**
 * This service returns the list of widgets for the user.
 * @returns {Promise<any>}
 */
export const getWidgets = async () => {
  const response =  await fetch("/db/widgets.json");
  return await response.json();
}

/**
 * This service returns the widget applicable for any user action
 * @param event
 * @returns {Promise<*>}
 */
export const findWidgetByEvent = async (widgets, event) => {
  return await widgets.filter((widget) => widget.type === "Interstitial").find((widget) => widget.matcher.indexOf(event) > -1);
}

/**
 * This service returns the widget applicable for any page visit.
 * @param route
 * @returns {Promise<*>}
 */
export const findWidgetByRoute = async (widgets, route) => {
  return await widgets.filter((widget) => widget.type === "PAGE_VIEW").find((widget) => widget.matcher.indexOf(route) > -1);
}

/**
 * This service returns the inline widget applicable to any component.
 * @param componentName
 * @returns {Promise<*>}
 */
export const findInlineWidget= async (widgets, componentName) => {
  return await widgets.filter((widget) => widget.type === "Inline").find((widget) => widget.matcher.indexOf(componentName) > -1);
}
