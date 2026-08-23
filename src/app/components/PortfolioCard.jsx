import Link from "next/link";
import Image from "next/image";
import React from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const stackBadgeColors = {
  react:   "bg-green-50  text-[#3B966A] border border-green-200",
  shopify: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  webflow: "bg-teal-50  text-teal-700  border border-teal-200",
  mern:    "bg-green-50  text-green-800 border border-green-200",
};

const PortfolioCard = ({ data }) => {
  const stackBadge =
    stackBadgeColors[data.teckStack?.toLowerCase()] ||
    "bg-green-50 text-[#3B966A] border border-green-200";

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1 flex flex-col h-full">
      {/* Image */}
      <div className="relative overflow-hidden aspect-video">
        <Image
          src={data.image}
          width={640}
          height={360}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          alt={data.title}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Quick view */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Link
            href={`/portfolio/${data.id}`}
            className="flex items-center gap-2 bg-white text-slate-900 font-semibold py-2.5 px-5 rounded-full shadow-lg hover:bg-[#3B966A] hover:text-white transition-all duration-200 text-sm"
          >
            <span>View Details</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Stack badge */}
        {data.teckStack && (
          <div className="absolute top-3 left-3">
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm ${stackBadge} capitalize`}
            >
              {data.teckStack}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#3B966A] transition-colors duration-200 line-clamp-1">
          {data.title}
        </h3>
        <p className="text-slate-500 text-sm mb-4 leading-relaxed line-clamp-2 flex-1">
          {data.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {data.technology?.slice(0, 4).map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-2.5 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs text-slate-600 font-medium"
            >
              {tag}
            </span>
          ))}
          {data.technology?.length > 4 && (
            <span className="px-2.5 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs text-slate-400">
              +{data.technology.length - 4} more
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
          <a
            href={data.live_link}
            className="flex items-center gap-1.5 text-sm font-medium text-[#3B966A] hover:text-[#2d7554] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={14} />
            <span>Live Site</span>
          </a>

          {data.client_link && (
            <a
              href={data.client_link}
              className="flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={14} />
              <span>Client</span>
            </a>
          )}

          {data.server_link &&
            !data.server_link.includes("full-stack online") && (
              <a
                href={data.server_link}
                className="flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={14} />
                <span>Server</span>
              </a>
            )}

          <Link
            href={`/portfolio/${data.id}`}
            className="ml-auto flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-[#3B966A] transition-colors"
          >
            Details <ArrowUpRight size={12} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
