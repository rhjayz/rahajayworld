import { ReactNode, useEffect, useRef } from "react";
import { Tooltip } from "flowbite";

type Placement =
  | "auto"
  | "auto-start"
  | "auto-end"
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "right"
  | "right-start"
  | "right-end"
  | "left"
  | "left-start"
  | "left-end";


type FlowbiteTooltipProps = {
  content: string;
  placement?: Placement;
  children: ReactNode;
};

export default function FlowbiteTooltip({ content, placement = "top", children }: FlowbiteTooltipProps) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tooltipRef.current && triggerRef.current) {
      new Tooltip(tooltipRef.current, triggerRef.current, {
        placement,
        triggerType: "hover",
      });
    }
  }, [placement]);

  const tooltipId = `tooltip-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <>
      <div ref={triggerRef} className="inline-block cursor-pointer">
        {children}
    </div>
      
      <div
        ref={tooltipRef}
        id={tooltipId}
        role="tooltip"
        className="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm font-jersey10"
      >
        {content}
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </>
  );
}
