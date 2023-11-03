import {RouteRecord} from "vue-router";
const commonFiles = import.meta.glob("./view/*/*.vue");
let children: RouteRecord = []
for (const [path, component] of Object.entries(commonFiles)) {
    const pathname = path.split("/")[2]
    console.log(pathname)
    const route = {
        path: pathname,
        component,
        name: pathname,
    };
    children.push(route)
}
export {children}
