import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Animal } from "contentlayer/generated";
import { BlurImage } from "types/shared";

interface Props {
  animal: Animal & BlurImage;
}

function AnimalCard({ animal }: Props) {
  return (
    <div>
      <div className="rounded-lg shadow">
        <Link href={`/wildtiere/${animal.slug}`}>
          <a>
            <div className="relative block text-[0]">
              <Image
                className="rounded-lg aspect-[16/10]"
                {...animal.imageProps}
                alt={animal.title}
                height={500}
                width={800}
                objectFit="cover"
                placeholder="blur"
              />
            </div>
          </a>
        </Link>
      </div>
      <div className="flex flex-col items-start justify-start px-2 pt-4">
        <Link className="mb-2" href={`/wildtiere/${animal.slug}`}>
          <a>
            <div>
              <div className="mb-0 text-xs font-medium leading-tight tracking-tight text-gray-600 uppercase">
                {animal.category}
              </div>
              <h2 className="text-2xl font-bold leading-tight tracking-tight text-gray-800">
                {animal.title}
              </h2>
            </div>
          </a>
        </Link>
        <Link href={`/wildtiere/${animal.slug}`}>
          <a>
            <p className="text-sm leading-tight text-gray-900 line-clamp-3">
              {animal.excerpt}
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default AnimalCard;
