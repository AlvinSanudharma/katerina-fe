"use client";

import Header from "@/components/Header";

function ComposeHeader() {
  return (
    <Header
      appendClassName="pt-16 bg-gray3 pb-20 "
      back={{ historyBack: true }}
      more={{ display: true, onClick: () => {} }}
      thumbsUp={{ display: true, onClick: () => {} }}
    />
  );
}

export default ComposeHeader;
