import { createSupabaseServerClient } from "@/lib/supabase/server-client";
import EmailPasswordDemo from "./EmailPasswordDemo";

export default async function EmailPasswordPage() {
  const supabase = await createSupabaseServerClient();
  const { data : { user }, }  = await supabase.auth.getUser();

  console.log({user});
  return <EmailPasswordDemo user={user} />;
}