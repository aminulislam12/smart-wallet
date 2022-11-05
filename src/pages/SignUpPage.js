import React from "react";
import AccountPageLayout from "../Components/AccountPageLayout";
import SignUpForm from "../Components/Auth/SignUpForm";
import AuthContent from "../Components/AuthContent";
import Terms from "../Components/Terms";
import TermsList from "../Components/TermsList";

export default function SignUpPage() {
  return (
    <AccountPageLayout>
      <AuthContent>
        <p className="text-muted mb-4">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident.
        </p>
        <Terms>
          <TermsList
            className="mdi mdi-arrow-right"
            text="At solmen va esser necessi far uniform paroles."
          />
          <TermsList
            className="mdi mdi-arrow-right"
            text="At solmen va esser necessi far uniform paroles."
          />
        </Terms>
      </AuthContent>
      <SignUpForm />
    </AccountPageLayout>
  );
}
