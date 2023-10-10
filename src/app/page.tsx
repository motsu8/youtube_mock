"use client";

import Image from "next/image";
import { AppAuth } from "@/components/Auth";
import supabase from "@/utils/supabaseClient";
import { useEffect } from "react";

export default function LandingPage(){

  // セッション情報があれば、Homeへ画面遷移
  useEffect(() => {
    const session = async () => {
      const { data, error } = await supabase.auth.getSession()
      if(data.session){
        window.location.href = "/home"
        console.log(data)
      }
    }
    session()  
  }, [])

  return (
    <div className="h-screen flex justify-center items-center space-x-3">
      <div className="flex flex-col justify-center items-center bg-slate-200 shadow-lg w-1/3 h-1/2">
        <h1 className="p-3">Login Page</h1>
        <form
          action=""
          className="flex flex-col space-y-4 justify-center items-center"
        >
          <input type="text" placeholder="メールアドレス" />
          <input type="text" placeholder="パスワード" />
          <button className="bg-white shadow-lg w-1/5 h-10 flex justify-center items-center rounded-md">
            <Image src="/google_icon.png" alt="" width={25} height={25} />
          </button>
          <button type="submit">サインイン</button>
        </form>
      </div>
        <AppAuth />
    </div>
  );
}
