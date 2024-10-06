import { Title } from "rizzui";
import cn from "../../../../Utils/cn.jsx";
import { ForwardedRef, forwardRef } from "react";

const widgetCardClasses = {
    base: "border border-muted bg-gray-0 p-5 dark:bg-gray-50 lg:p-7",
    rounded: {
        sm: "rounded-sm",
        DEFAULT: "rounded-lg",
        lg: "rounded-xl",
        xl: "rounded-2xl",
    },
};



function WidgetCard(
    {
        title,
        action,
        description,
        rounded = "DEFAULT",
        className,
        headerClassName,
        actionClassName,
        titleClassName,
        descriptionClassName,
        children,
    },
    ref
) {
    return (
        <div
            className={cn(widgetCardClasses.base, widgetCardClasses.rounded[rounded], className)}
            ref={ref}
        >
            <div className={cn(action && "flex items-start justify-between", headerClassName)}>
                <div>
                    <Title
                        as="h3"
                        className={cn("text-base font-semibold sm:text-lg", titleClassName)}
                    >
                        {title}
                    </Title>
                    {description && <div className={descriptionClassName}>{description}</div>}
                </div>
                {action && <div className={cn("ps-2", actionClassName)}>{action}</div>}
            </div>
            {children}
        </div>
    );
}

export default forwardRef(WidgetCard);
WidgetCard.displayName = "WidgetCard";
