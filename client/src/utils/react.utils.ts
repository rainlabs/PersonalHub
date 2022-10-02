import React from "react"

export default {
    getValidChildren(children: React.ReactNode) {
        return React.Children.toArray(children).filter((child) =>
            React.isValidElement(child),
        ) as React.ReactElement[]
    }
}