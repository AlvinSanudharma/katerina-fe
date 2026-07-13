"use client";

import Header from "@/components/Header";

function ComposeHeader() {
  return (
    <Header
      appendClassName="pt-16 bg-gray3 pb-20"
      back={{ historyBack: true }}
      title="Your Informations"
      more={{ display: true, onClick: () => {} }}
      thumbsUp={{ display: false }}
    />
  );
}

export default ComposeHeader;
