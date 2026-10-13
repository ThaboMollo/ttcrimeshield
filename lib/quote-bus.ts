export const REQUEST_EVENT = "tt:request-service";

/** Lets a service card anywhere on the page preselect itself in the request builder. */
export function requestService(serviceId: string) {
  window.dispatchEvent(new CustomEvent(REQUEST_EVENT, { detail: serviceId }));
}
