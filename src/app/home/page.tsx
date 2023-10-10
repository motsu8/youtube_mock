"use client";

import supabase from "@/utils/supabaseClient";
import Image from "next/image";

export default function Home() {
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      alert("サインアウトできませんでした！！");
      return;
    }

    window.location.href = "/";
  };

  const getSession = async () => {
    const { data, error } = await supabase.auth.getSession();
    if (data) {
      console.log(data, error);
    }
  };

  return (
    <>
      <div>Home</div>
      <button className="bg-gray-100" onClick={() => signOut()}>
        ログアウト
      </button>
      <br />
      <button className="bg-gray-100" onClick={() => getSession()}>
        セッションを取得
      </button>
    </>
  );
}
