import { redirect } from "next/navigation";

export async function getPackages() {
  try {
    const res = await fetch(`${process.env.HOST_API}/api/catering-packages`, {
      method: "GET",
      cache: "no-cache",
    });

    return res.json();
  } catch (error) {
    throw error;
  }
}

export async function getPackageDetails(packageSlug: string) {
  try {
    const res = await fetch(
      `${process.env.HOST_API}/api/catering-package/${packageSlug}`,
      {
        method: "GET",
        cache: "no-cache",
      },
    );

    return res.json();
  } catch (error) {
    throw error;
  }
}

export async function getFilterPackagesByCityAndCategory(
  citySlug: string,
  categorySlug: string,
) {
  try {
    const res = await fetch(
      `${process.env.HOST_API}/api/filters/catering-packages?category_slug=${categorySlug}&city_slug=${citySlug}`,
      {
        method: "GET",
        cache: "no-cache",
      },
    );

    return res.json();
  } catch (error) {
    throw error;
  }
}

export async function submitInformation(prevState: any, formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const startedAt = formData.get("started_at");
  const slug = formData.get("slug");
  const cateringPackageId = formData.get("catering_package_id");
  const tierId = formData.get("catering_tier_id");

  if (name === "") {
    return {
      message: "Name is required",
      field: "name",
    };
  }

  if (email === "") {
    return {
      message: "Email is required",
      field: "email",
    };
  }

  if (phone === "") {
    return {
      message: "Phone is required",
      field: "phone",
    };
  }

  if (startedAt === "") {
    return {
      message: "Start at is required",
      field: "started_at",
    };
  }

  return {
    message: "Next Step",
    field: "",
    data: {
      slug,
      name,
      email,
      phone,
      startedAt,
      tierId,
    },
  };
}
