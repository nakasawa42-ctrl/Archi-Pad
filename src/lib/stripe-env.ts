/**
 * Stripe 接続の有無（サーバー側で Checkout Session 作成可否の判定に使用）
 * `.env` に `STRIPE_SECRET_KEY` と `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` を用意すると true。
 */
export function isStripeSecretConfigured(): boolean {
  return Boolean(process.env.STRIPE_SECRET_KEY?.trim());
}

export function isStripePublishableConfigured(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY?.trim());
}

export function isStripeReadyForCheckout(): boolean {
  return isStripeSecretConfigured() && isStripePublishableConfigured();
}
