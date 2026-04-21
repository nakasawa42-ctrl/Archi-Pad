import { NextResponse } from "next/server";
import type { EnterpriseInquiryMeta } from "@/lib/enterprise-inquiry-meta";

const MAX_LEN = 8000;

type EnterprisePayload = {
  companyName?: string;
  contactName?: string;
  email?: string;
  phone?: string;
  ideaReference?: string;
  message?: string;
  /** inquiryMeta と冗長だがログ・アダプタ向けにトップレベルでも受け取る */
  inquiryChannel?: "enterprise" | "manufacturer" | "rights";
  /** URL 由来・フォーム表示時点の参照（将来 enterprise_inquiries 行に正規化） */
  inquiryMeta?: Partial<EnterpriseInquiryMeta>;
};

export async function POST(request: Request) {
  let body: EnterprisePayload;
  try {
    body = (await request.json()) as EnterprisePayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const companyName = body.companyName?.trim() ?? "";
  const contactName = body.contactName?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = (body.phone ?? "").trim();
  const ideaReference = (body.ideaReference ?? "").trim();
  const message = body.message?.trim() ?? "";

  if (!companyName || !contactName || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "必須項目が不足しています" },
      { status: 400 },
    );
  }

  if (message.length > MAX_LEN) {
    return NextResponse.json(
      { ok: false, error: "お問い合わせ内容が長すぎます" },
      { status: 400 },
    );
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return NextResponse.json(
      { ok: false, error: "メールアドレスの形式が正しくありません" },
      { status: 400 },
    );
  }

  // 本番ではメール送信・CRM・スプレッドシート連携等に差し替え
  console.info("[enterprise-contact]", {
    inquiryChannel:
      body.inquiryChannel ??
      body.inquiryMeta?.inquiryChannel ??
      undefined,
    companyName,
    contactName,
    email,
    phone: phone || undefined,
    ideaReference: ideaReference || undefined,
    messageLength: message.length,
    inquiryMeta: body.inquiryMeta ?? undefined,
  });

  return NextResponse.json({ ok: true });
}
