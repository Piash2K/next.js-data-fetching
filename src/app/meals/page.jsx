"use client";
import React, { useEffect, useState } from "react";

export default function MealsPage() {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchMeals() {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        );
        const data = await res.json();
        setMeals(data?.meals || []);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMeals();
  }, [search]);

  return (
    <div>
      <div className=" text-center">
        <input className="text-black bg-amber-50" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className="grid grid-cols-4 gap-4 ">
        {meals?.map((singleMeal) => {
          return (
            <div key={singleMeal.idMeal} className="border border-slate-50">
              <p>{singleMeal?.strMeal}</p>
              <p>{singleMeal?.strInstructions}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
