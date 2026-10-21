export function isExternalHref(href) {
  return typeof href === "string" && /^https?:\/\//.test(href);
}

export function withBasePath(pathname, href) {
  if (!href.startsWith("#")) return href;
  return pathname === "/" ? href : `/${href}`;
}
