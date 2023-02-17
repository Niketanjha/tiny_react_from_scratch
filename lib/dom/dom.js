// 1. createElement Stub
// 2. createElement simple implementation 


const TinyReact = (function () {
    function createElement(type, attributes = {}, ...children) {
        return {
            type,
            children,
            props: attributes
        }
    }
    return {
        createElement
    }
})()