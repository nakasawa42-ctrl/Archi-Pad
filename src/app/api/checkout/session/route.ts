import { NextResponse } from "next/server";
import { isStripeReadyForCheckout } from "@/lib/stripe-env";

type CheckoutBody = {
  productKind?: "tech_video" | "cad_pack";
  contentType?: string;
  contentSlug?: string;
  contentTitle?: string;
};

/**
 * Stripe Checkout Session 作成（準備段階）
 * — 秘密鍵と publishable key がある場合のみ、将来ここで `stripe.checkout.sessions.create` を呼ぶ。
 */
export async function POST(request: Request) {
  let body: CheckoutBody;
  try {
    body = (await request.json()) as CheckoutBody;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const pk = body.productKind ?? "";
  const slug = (body.contentSlug ?? "").trim();
  if (!slug || (pk !== "tech_video" && pk !== "cad_pack")) {
    return NextResponse.json(
      { ok: false, message: "商品またはコンテンツ参照が不正です" },
      { status: 400 },
    );
  }

  if (!isStripeReadyForCheckout()) {
    return NextResponse.json({
      ok: false,
      message:
        "決済はまだ有効化されていません。STRIPE_SECRET_KEY と NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY を .env に設定し、Checkout 作成処理を接続してください。",
    });
  }

  // TODO: import Stripe from "stripe"; const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "..." });
  // const session = await stripe.checkout.sessions.create({ mode: "payment", line_items: [...], success_url, cancel_url, metadata: { ... } });
  // return NextResponse.json({ ok: true, url: session.url });

  return NextResponse.json({
    ok: false,
    message:
      "Stripe の認証情報は検出されました。商品 ID（Price）と Checkout 作成の実装を次のコミットで有効化してください。",
  });
}
