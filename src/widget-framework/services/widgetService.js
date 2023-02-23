/**
 * This module is a simulation of the smart microservice which accepts the context and returns with all possible widgets to be shown in the whole user journey
 */

/**
 * This is the list of widgets possibly sourced from any widget authoring service.
 * @type {({component: string, id: number, type: string, title: string, matcher: [string, string]}|{component: string, id: number, title: string, type: string, event: string})[]}
 */

const Widgets = [
//     {
//     id: 1,
//     type: 'PAGE_VIEW',
//     component: 'AgeVerification',
//     matcher: ['/products/2', '/products/4']
// }, {
//     id: 2,
//     type: 'Interstitial',
//     component: 'Customizations',
//     event: 'BUY_CLICK'
// },
//     {
//         id: 3,
//         type: 'Inline',
//         component: 'PostRequirements',
//         matcher: ['Products']
//     }
]

/**
 * This service returns the widget applicable for any page visit.
 * @param event
 * @returns {{component: string, id: number, type: string, title: string, matcher: string[]} | {component: string, id: number, title: string, type: string, event: string}}
 */
export const findWidgetByEvent = (event) => {
  return Widgets.find((widget) => widget.event === event)
}

/**
 * This service returns the widget applicable to any user action.
 * @param route
 * @returns {{component: string, id: number, type: string, title: string, matcher: string[]} | {component: string, id: number, title: string, type: string, event: string}}
 */
export const findWidgetByRoute = (route) => {
  return Widgets.filter((widget) => widget.type === "PAGE_VIEW").find((widget) => widget.matcher.indexOf(route) > -1);
}

/**
 * This service returns the inline widget applicable to any component.
 * @param componentName
 * @returns {{component: string, id: number, type: string, title: string, matcher: string[]} | {component: string, id: number, title: string, type: string, event: string}}
 */
export const findInlineWidget= (componentName) => {
  return Widgets.filter((widget) => widget.type === "Inline").find((widget) => widget.matcher.indexOf(componentName) > -1);
}
