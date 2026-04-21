"use client";

import { useState } from "react";
import { Building2, Loader2, Send } from "lucide-react";
import {
  EMPTY_ENTERPRISE_INQUIRY_META,
  type EnterpriseInquiryMeta,
} from "@/lib/enterprise-inquiry-meta";

type EnterpriseContactFormProps = {
  /** URLクエリから合成した「関心のあるアイデア」の初期値 */
  prefilledIdeaReference?: string;
  /** 画面表示時点のクエリ（送信時に JSON で同梱・将来の CRM / DB 照会用） */
  inquiryMeta?: EnterpriseInquiryMeta;
  /** ページ種別 — inquiryChannel の最終決定に使用 */
  audience?: "enterprise" | "manufacturer" | "rights";
};

export function EnterpriseContactForm({
  prefilledIdeaReference = "",
  inquiryMeta = EMPTY_ENTERPRISE_INQUIRY_META,
  audience = "enterprise",
}: EnterpriseContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const resolvedMeta: EnterpriseInquiryMeta = {
      ...inquiryMeta,
      inquiryChannel:
        audience === "manufacturer"
          ? "manufacturer"
          : audience === "rights"
            ? "rights"
            : (inquiryMeta.inquiryChannel ?? "enterprise"),
    };

    const payload = {
      companyName: String(fd.get("companyName") ?? ""),
      contactName: String(fd.get("contactName") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      ideaReference: String(fd.get("ideaReference") ?? ""),
      message: String(fd.get("message") ?? ""),
      inquiryMeta: resolvedMeta,
      inquiryChannel: resolvedMeta.inquiryChannel,
    };

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/enterprise-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "送信に失敗しました");
        return;
      }
      setStatus("ok");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
      setErrorMessage("通信に失敗しました。時間をおいて再度お試しください。");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border-2 border-stone-200 bg-white p-6 shadow-lg sm:p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="companyName" className="text-sm font-bold text-stone-800">
            会社名 <span className="text-red-600">*</span>
          </label>
          <input
            id="companyName"
            name="companyName"
            required
            autoComplete="organization"
            className="mt-2 w-full rounded-xl border border-stone-200 px-4 py-3 text-stone-900 shadow-inner outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30"
          />
        </div>
        <div>
          <label htmlFor="contactName" className="text-sm font-bold text-stone-800">
            担当者名 <span className="text-red-600">*</span>
          </label>
          <input
            id="contactName"
            name="contactName"
            required
            autoComplete="name"
            className="mt-2 w-full rounded-xl border border-stone-200 px-4 py-3 text-stone-900 shadow-inner outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-bold text-stone-800">
            メール <span className="text-red-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-xl border border-stone-200 px-4 py-3 text-stone-900 shadow-inner outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-bold text-stone-800">
            電話（任意）
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="mt-2 w-full rounded-xl border border-stone-200 px-4 py-3 text-stone-900 shadow-inner outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30"
          />
        </div>
        <div>
          <label htmlFor="ideaReference" className="text-sm font-bold text-stone-800">
            {audience === "manufacturer"
              ? "対象の知恵・投稿（タイトル・ID）"
              : audience === "rights"
                ? "対象コンテンツ（タイトル・URL・投稿ID）"
                : "関心のあるアイデア（タイトル・IDなど）"}
          </label>
          <input
            id="ideaReference"
            name="ideaReference"
            defaultValue={prefilledIdeaReference}
            placeholder={
              audience === "manufacturer"
                ? "例：掲示板の投稿ID、レシピ名など"
                : audience === "rights"
                  ? "例：本ページのレシピ名、掲示板の投稿ID など"
                  : "掲示板の投稿タイトルなど"
            }
            className="mt-2 w-full rounded-xl border border-stone-200 px-4 py-3 text-stone-900 shadow-inner outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-bold text-stone-800">
            ご用件 <span className="text-red-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder={
              audience === "manufacturer"
                ? "量産規模・希望ロット・導入現場・安全規格・NDAの要否など"
                : audience === "rights"
                  ? "希望する権利の範囲（買取／独占・非独占ライセンス）・想定する用途・地域・実施時期・NDAの要否・予算の目安など"
                  : "製品化の検討内容・スケジュール目安・NDAの要否など"
            }
            className="mt-2 w-full rounded-xl border border-stone-200 px-4 py-3 text-stone-900 shadow-inner outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30"
          />
        </div>
      </div>

      {status === "error" ? (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
          {errorMessage}
        </p>
      ) : null}
      {status === "ok" ? (
        <p className="rounded-lg bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-900">
          送信を受け付けました。担当より折り返しご連絡します。
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-stone-900 px-6 py-4 font-bold text-white transition hover:bg-stone-800 disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? (
          <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
        ) : (
          <Send className="h-5 w-5" aria-hidden />
        )}
        送信する
      </button>

      <p className="flex items-start gap-2 text-xs leading-relaxed text-stone-500">
        <Building2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
        内容は運営端末のログに記録されます（本番ではCRM・メール送信に接続してください）。個人情報は取り扱い規程に従って管理されます。
      </p>
    </form>
  );
}
