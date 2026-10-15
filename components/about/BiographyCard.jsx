"use client";
import React from "react";

function BiographyCard({ duration = "1.2" }) {
  return (
    <div className="p-6">
      <div className="uppercase font-mono font-semibold text-lg mb-2">
        Biography
      </div>
      <div className="grid grid-cols-5">
        <div className="col-span-2 py-1 text-sm text-white/60 font-semibold font-mon">
          Name
        </div>
        <div className="col-span-3 py-1 text-sm">Kaung Khant Kyaw</div>
      </div>
      <div className="grid grid-cols-5">
        <div className="col-span-2 py-1 text-sm text-white/60 font-semibold font-mon">
          Nickname
        </div>
        <div className="col-span-3 py-1 text-sm">
          Danial, K<sup>3</sup>
        </div>
      </div>
      <div className="grid grid-cols-5">
        <div className="col-span-2 py-1 text-sm text-white/60 font-semibold font-mon">
          Age
        </div>
        <div className="col-span-3 py-1 text-sm">22</div>
        <div className="col-span-2 py-1 text-sm text-white/60 font-semibold font-mon">
          City
        </div>
        <div className="col-span-3 py-1 text-sm">Mandalay, Myanmar</div>
      </div>
    </div>
  );
}

export default BiographyCard;
