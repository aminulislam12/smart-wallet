import React from "react";
import Badge from "./Badge";
import Card from "./Card";

export default function TopCard({
  title,
  balance,
  lasttnx,
  tnxsum,
  className,
  badgeColor,
  icon,
  href,
}) {
  return (
    <>
      <Card className={className}>
        <div className="p-3 mini-stat-desc">
          <div className="clearfix">
            <h6 className="text-uppercase mt-0 float-left text-white-60">
              {title}
            </h6>
            <h4 className="mb-3 mt-0 float-right">৳{balance}</h4>
          </div>
          <div>
            <Badge className={badgeColor}>+{lasttnx} Tk</Badge>
            <span className="ml-2">From Last Trasaction </span>
          </div>
        </div>
        <div className="p-3">
          <div className="float-right">
            <a href={href} className="text-white-50">
              <i className={icon}></i>
            </a>
          </div>
          <p className="font-14 m-0">Last: ৳ {tnxsum}</p>
        </div>
      </Card>
    </>
  );
}
