import { useState } from "react";
import { ChevronRight, ChevronLeft, ChevronDown } from "lucide-react";

export default function TrendingSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const trendingShows = [
    {
      id: 1,
      title: "Khel Khel Mein",
      rating: "8.5",
      year: "2024",
      image: "https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABchPG15dc4HfMgdO7Ok_yHF00h-mpq8FWL-GFsS3Fc_J38O9VSdBMCmLYvevY5DM4qlfT5aSXasH2FBTH4_QF-kcgHQhYhFQQpsC2HFZBexbVujU-jiY3tof-OqDQughKSebbPhQkboKyIfGFZrtdQ6ndDXPf8McL4X2P6ZSyXN7F_lQqePqwgVUg39v8dmDhlxTA3Am8Il17F2NHvUXdtVBLHnjyKU8MhaMZVqJZBZzyzgqqZZLzouqtI-mSl4bORrrTgmZX-b7P7-oaojGD4drKoh-SAa5ngb8sZuEOx-NsV6EbvOH-4dFEpH0_cE_15SvyD0PqpRjLZi1izO7lpw.webp?r=17c",
      badge: "TOP 10",
      status: "Recently added",
    },
    {
      id: 2,
      title: "Kandhar",
      rating: "7.9",
      year: "2024",
      image: "https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABRjd9tlB7HypTSlCjtz19Xs6enIb_eEp-b98LyBi-q4oRXeXi7Yr-HvRp-sZAWoZOZlER5NwXKjb8XLpCzRpun03C0MLAut4FA7Rjb2H1Szvgf4fK58We75ETbkPGp4TwrurN9enH5SMIzHUFboNiqo9zCutFhAWWafSFvZKEKMjdiLeqGoiGy8ynsdAcSyuu3lH2w2iiCxRtE526dn5mclTdla-2v6apIU3eMF25QMP7folLc4qFPHOo72eWtfrw1FGyB8ISjZFbT2JowmRRh1GsmBKLe66KmOj1-LwdusVPhLyHhOj7eAoFc1ecdZYIzCddeKcI9Po7KiITapegTM.webp?r=738",
      badge: "TOP 10",
      status: "Recently added",
    },
    {
      id: 3,
      title: "Greatest of All Time",
      rating: "8.2",
      year: "2024",
      image: "https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABRI6G-YI41kxtUQ_Q7Zbv2hDMmaE6UO55X8-4MeSYoCmguFroUSLc6D3e2LpBqDv0xvH8vMC_uBJW1yNZH2PiNJhVGWcBKcgGVcsyZpP_oeVvbdBYD4LYMD52UrTWWdW6ibdJ_d9x5s5T9CZF76OrfKCCXHjUHkauask_ikoPuKd9E30OiIxNnvutvKd_FxT9YLe9Rd1lJceznPKoB0vBtZ1iI0UfRme4Stq9DuRIyr3Jx-YVbaWjDxvPjr90ihIfKXKoOxGNOFHQOv9JumyvyJAWdKvs4tNlqj7RABPczxWHAjg_WtVvyEmY7mmb2QKDaIHnebpl1NDHttdN1xsAoQ.webp?r=4e6",
      badge: "TOP 10",
      status: "Recently added",
    },
    {
      id: 4,
      title: "Fighter",
      rating: "8.7",
      year: "2024",
      image: "https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABSP6k6nDqdeme4Hh-zVVU6N170Xh-Q3zThx3aIQKtPytOQUPM5hNFsuE5rsJGpkZYoecudG4Ec-m8jEkKmuQdlj-wxlUjRkf5udLNmKTmUXkkBMIbFtyEcbITSoICOsEceJOpjGp-bHd5qpkqzZWf2ZbpIld-MQfpFAJ9JbfagwMBGcYS9poGc0mrXKFnX6rCt7sXEG1YDGmlrbukiqcnETr7ZkE37-dzd-uFylm_KIpMqB_5rv-eZSVYEsaSC-cz_GeCj2g_1QAu-oO1wrP6ICUDplZ00LnsgVSEU09-O4pxjjQeZRUZDrTlkgkkiUI_YcSrrdgNigJFo1pthMezGk.webp?r=2a7",
      badge: "TOP 10",
      status: "Recently added",
    },
    {
      id: 5,
      title: "Citadel",
      rating: "7.8",
      year: "2024",
      image: "https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABYtQQuyzfpH21gbzUiC47JPBO9fctekBa91MAuaqBkJX2hq5AgldT2woVYvCfeJXURRTmZRK-nEXI2W4yyEDtLTe4fzrzyXx_kNLFCoxHcjNTWIfW-VktlZZl6wGsbL4EYFYmg2-H93j4GnJLAFUvRUfEDB3a3dAHDCvEgqkIMDRBzwI4Ggp3PQvNd-7XSbl5e8NoOY0OWJ7UFGMEnLrUlUj1r5EPNjTkk52iU3SMPdnCFX7WjFsujHobj_ljq6YIqSFOgZtCuiaXx4gTwqZm4hSGkHCbQWe7rg2WfMFjr15ua7ZpEPSTCJovK-zYgxX3hwvapFTIv4p1YCnWWtV66M9vXD1uwhDm5anxVn412cjsn2Quc8.webp?r=21e",
      badge: "TOP 10",
      status: "Recently added",
    },
    {
      id: 6,
      title: "Breaking Bad",
      rating: "9.5",
      year: "2024",
      image: "https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABeNW_c9U9xz-Et1ZyU6zq1A1X3Dpuw90kY4WTTX0QqT4Rob8rlDd4Mf17LnqNX6gM74q5aFjQYrm6Qh_Q_EKy8nIXrmKqcPcmdg0zLxXZgSdtu2nUMRa6PxDDGR8M7oGuD3ujQNmDWC9aCnW3THvp4e-LQv46PNAEJwsV1pFD7CQAoFEHu_eOUHvgH2XQxsXjb4QU-pjKFKRs7nRS5N7eFOL9Slo2nWZqW5fB6jvhFJq7PPEu_qMYmS4EkjitCOpa5E8GmbfZwv4jbRGahoc1J4QLX8UuG2CzftTm8Fxw-VmMxsx-MPTM23iLhefxi2FaaLNT-JAAjzYeeEh6eS2l7I.webp?r=7a3",
      badge: "TOP 10",
      status: "New Season",
    },
    {
      id: 7,
      title: "Stranger Things",
      rating: "8.9",
      year: "2024",
      image: "https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABekOyOEc0IMYCBzL1U12H-gMP39eTC0zZ0CawiEZfsVVEVfuzAXMWo1_7HVifGiVAezM9MLKJ-zMYF5vU2NZj1GAFKpJhPsJ9wD8412kiexuLATsJwlbCipYevBS8u1H_C0GtTn9c_dBQCtGd1H7CsnPPEeeLBX_VOpjX3-MufmSG3wQycmQXMFQVYJT4Pz8SM98uF8rVn1JhdfcmuopEFfxoojgtxEMvhFWitJ_62GUbqydRNfqfpurMuRLitUusP3nmdQGJ0G_I8ryAjgF4Ur7F2WKNrSALVuW3SarpyVl0Q4rv9U2IwglhY0wk_AGVwhJMiC1SNYaoofog4iInvE.webp?r=6b0",
      badge: "TOP 10",
      status: "Trending",
    },
    {
      id: 8,
      title: "Dark",
      rating: "8.8",
      year: "2024",
      image: "https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZqmB__bfjnI8HxaRTLVPVw4Pm6FrTtnh9aTLJ1BlvjMTUzdL4cTECEYm2-omukFDT7AUPTklgyAgj1ydiK7daICeA49comO-FZe0lm0wFoDvSQJYSHp1PbkZh9x5ZhTKuRcW4fwIVQb86kduHg9qAE3rql1hS_z38QryzgDgwPGiaw65c9BjmeIBiVVGEm-j5Y9cwEvoLB_5RDPgfhf6fvq4xITAElFC2TyWKDSSM2wQKPGXOG1vYTeWTbWpF9M9zPedV5civ4K9TBq9kIHC0wCJfReP1avQ-oOm29KKdEc5GHeK0yNkEd2.webp?r=eb0",
      badge: "TOP 10",
      status: "Popular",
    },
    {
      id: 9,
      title: "Money Heist",
      rating: "8.3",
      year: "2024",
      image: "https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZpb1_hPsfkW_3W9d6rBB1Zgh2_-XSfOSbdNd5z2GuhB-MSvR5nrjXmmK6WCPPTBNk9oFIuhS9cQWtg0TiJqXBSkdu36d7LFbjkxdYFidG5niA2rk6R8YKmg7FuZ4Z9C98CQ.webp?r=cb7",
      badge: "TOP 10",
      status: "Final Season",
    },
    {
      id: 10,
      title: "The Crown",
      rating: "8.6",
      year: "2024",
      image: "https://occ-0-2590-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABcG13pRIelXYVY0GNdMNxAtNOwicZ2IOBI6ZnfxMs4bPhyd3sIXIMGW0JZigHMXqKB1HUWoJb2yDAf45Guk9eB9dbdtATIgM1jRx5eEYFb-P2V-f6IHFQFcXGKYwEmjmpqroRkylr_ic0v_hRzQejFkxVOH7hW1p843K0CIA6RCKEc34FziUJC3oxlNm0RKtzzLSgO7mWeungF0YcnpXu087Kxbvk7L7bDNyVWV83FnOWCRI5bVApKz3ZCLvMMaiGHaSCnaqHAgrPlD7u23_j6oH_MTD7M2i5_DuRmzQ2iM21ZY-Y8lSgqDi.webp?r=02a",
      badge: "TOP 10",
      status: "New Episodes",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(trendingShows.length / 5));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(trendingShows.length / 5)) % Math.ceil(trendingShows.length / 5));
  };

  const FilterDropdown = ({ label }) => (
    <button className="w-full md:w-[100px] lg:w-[150px] p-2 md:p-4 flex justify-between items-center bg-[#141414] border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors text-lg">
      <span>{label}</span>
      <ChevronDown className="w-5 h-5" />
    </button>
  );

  return (
    <section className="py-12 px-4 lg:px-32 ">
      <div className="max-w-7xl mx-auto space-y-4">
        <h2 className="text-3xl font-bold mb-6">Trending Now</h2>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <FilterDropdown label="India" />
          <FilterDropdown label="Movies" />
        </div>

        {/* Trending Shows Slider */}
        <div className="relative group">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full 
                      lg:group-hover:opacity-100 transition-opacity
                     hover:bg-black/80"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full 
                      lg:group-hover:opacity-100 transition-opacity
                     hover:bg-black/80"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Shows Grid */}
          <div className="overflow-hidden">
            <div className="flex gap-4 transition-transform duration-500 ease-out overflow-y-scroll scrollbar" style={{ transform: `translateX(-${currentSlide * 100}%) ` }}>
              {trendingShows.map((show) => (
                <div key={show.id} className="relative flex-none group/item">
                  {/* Number Overlay */}
                  <div className="absolute  bottom-4 z-10 text-7xl font-bold text-white opacity-80 stroke-black" style={{ WebkitTextStroke: "2px #141414" }}>
                    {show.id}
                  </div>

                  {/* Image Container */}
                  <div className="relative rounded-lg overflow-hidden">
                    <img src={show.image} alt={show.title} className="w-full aspect-[2/3] object-cover transition-transform duration-300 group-hover/item:scale-105" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
