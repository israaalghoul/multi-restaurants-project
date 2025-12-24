import React ,{Fragment} from "react";
import { useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function CustomBreadcrumb({ items = [] }) {
  const location = useLocation();
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => {
          const isLast = index === items.length - 1; 
          // console.log (isLast);
          const isActive = item.href === location.pathname; 

          return (
            <Fragment key={index}>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage  className={`
                      ${isActive ? "text-foreground" : "text-muted-foreground"}
                      hover:text-primary
                    `}>
                    {item.label}
                  </BreadcrumbPage>
                ) : item.href ? (
                  <BreadcrumbLink
                    href={item.href}
                    className={`
                      ${isActive ? "text-foreground" : "text-muted-foreground"}
                      hover:text-primary
                    `}
                  >
                    {item.label}
                  </BreadcrumbLink>
                )
                 : (
                
                  <span className="text-foreground">{item.label}</span>
                )
            }
              </BreadcrumbItem>

              {!isLast && <BreadcrumbSeparator />}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
