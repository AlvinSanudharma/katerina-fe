"use client";

import Header from "@/components/Header";

function ComposeHeader() {
  return (
    <Header
      appendClassName="pt-16 bg-gray3 pb-20 "
      title="By Category"
      back={{ historyBack: true }}
      more={{ display: false }}
      thumbsUp={{ display: false }}
    />
  );
}

export default ComposeHeader;
