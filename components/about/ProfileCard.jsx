"use client";
import React from "react";
import Image from "next/image";

function ProfileCard({ duration = "1.2" }) {
  return (
    <div className="relative overflow-hidden aspect-[6/7] w-full h-full">
      <Image
        src="/img/profile.jpeg"
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={75}
        className="object-cover brightness-50 saturate-0"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end text-sm">
        <div className="p-3 space-y-[0.4rem]">
          <div className="bg-white/15 px-2 inline-block rounded-s-full rounded-e-full">
            Hola! 👋
          </div>
          <br />
          <div className="bg-white/15 px-2 inline-block rounded-s-full rounded-e-full">
            My name is Kaung Khant Kyaw.
          </div>
          <br />
          <div className="bg-white/15 px-2 inline-block rounded-s-full rounded-e-full">
            But you can call me Kcube!
          </div>
          <br />
          <div className="bg-white/15 px-2 inline-block rounded-s-full rounded-e-full">
            Grab my email and get in touch 🤞
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
