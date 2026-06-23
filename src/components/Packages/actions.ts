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
