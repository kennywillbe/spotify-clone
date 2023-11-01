"use client"

import SongItem from "@/components/songitem"

const PageContent = () => {
  const songs = [
    {
      name: "Gasoline",
      playcount: "5346884",
      artist: {
        name: "The Weeknd",
      },
      "@attr": { rank: "31" },
    },
    {
      name: "House of Balloons / Glass Table Girls",
      playcount: "4306427",
      listeners: "446927",
      mbid: "1447bd5f-4150-4789-a46b-ded69053148a",
      url: "https://www.last.fm/music/The+Weeknd/_/House+of+Balloons+%2F+Glass+Table+Girls",
      streamable: "0",
      artist: {
        name: "The Weeknd",
        mbid: "c8b03190-306c-4120-bb0b-6f2ebfc06ea9",
        url: "https://www.last.fm/music/The+Weeknd",
      },
      image: [[Object], [Object], [Object], [Object]],
      "@attr": { rank: "32" },
    },
    {
      name: "False Alarm",
      playcount: "3727508",
      listeners: "444484",
      url: "https://www.last.fm/music/The+Weeknd/_/False+Alarm",
      streamable: "0",
      artist: {
        name: "The Weeknd",
        mbid: "c8b03190-306c-4120-bb0b-6f2ebfc06ea9",
        url: "https://www.last.fm/music/The+Weeknd",
      },
      image: [[Object], [Object], [Object], [Object]],
      "@attr": { rank: "33" },
    },
    {
      name: "Acquainted",
      playcount: "3717655",
      listeners: "442674",
      url: "https://www.last.fm/music/The+Weeknd/_/Acquainted",
      streamable: "0",
      artist: {
        name: "The Weeknd",
        mbid: "c8b03190-306c-4120-bb0b-6f2ebfc06ea9",
        url: "https://www.last.fm/music/The+Weeknd",
      },
      image: [[Object], [Object], [Object], [Object]],
      "@attr": { rank: "34" },
    },
    {
      name: "How Do I Make You Love Me?",
      playcount: "4886394",
      listeners: "434828",
      url: "https://www.last.fm/music/The+Weeknd/_/How+Do+I+Make+You+Love+Me%3F",
      streamable: "0",
      artist: {
        name: "The Weeknd",
        mbid: "c8b03190-306c-4120-bb0b-6f2ebfc06ea9",
        url: "https://www.last.fm/music/The+Weeknd",
      },
      image: [[Object], [Object], [Object], [Object]],
      "@attr": { rank: "35" },
    },
    {
      name: "Hardest To Love",
      playcount: "4687343",
      listeners: "433021",
      url: "https://www.last.fm/music/The+Weeknd/_/Hardest+To+Love",
      streamable: "0",
      artist: {
        name: "The Weeknd",
        mbid: "c8b03190-306c-4120-bb0b-6f2ebfc06ea9",
        url: "https://www.last.fm/music/The+Weeknd",
      },
      image: [[Object], [Object], [Object], [Object]],
      "@attr": { rank: "36" },
    },
    {
      name: "Sidewalks",
      playcount: "4027843",
      listeners: "431427",
      url: "https://www.last.fm/music/The+Weeknd/_/Sidewalks",
      streamable: "0",
      artist: {
        name: "The Weeknd",
        mbid: "c8b03190-306c-4120-bb0b-6f2ebfc06ea9",
        url: "https://www.last.fm/music/The+Weeknd",
      },
      image: [[Object], [Object], [Object], [Object]],
      "@attr": { rank: "37" },
    },
    {
      name: "What You Need",
      playcount: "3618069",
      listeners: "427592",
      mbid: "05a472b0-09e5-44cd-bf2d-f6f6ab56cc32",
      url: "https://www.last.fm/music/The+Weeknd/_/What+You+Need",
      streamable: "0",
      artist: {
        name: "The Weeknd",
        mbid: "c8b03190-306c-4120-bb0b-6f2ebfc06ea9",
        url: "https://www.last.fm/music/The+Weeknd",
      },
      image: [[Object], [Object], [Object], [Object]],
      "@attr": { rank: "38" },
    },
    {
      name: "Too Late",
      playcount: "4221639",
      listeners: "423929",
      url: "https://www.last.fm/music/The+Weeknd/_/Too+Late",
      streamable: "0",
      artist: {
        name: "The Weeknd",
        mbid: "c8b03190-306c-4120-bb0b-6f2ebfc06ea9",
        url: "https://www.last.fm/music/The+Weeknd",
      },
      image: [[Object], [Object], [Object], [Object]],
      "@attr": { rank: "39" },
    },
    {
      name: "Here We Go… Again (feat. Tyler, The Creator)",
      playcount: "3845279",
      listeners: "414833",
      url: "https://www.last.fm/music/The+Weeknd/_/Here+We+Go%E2%80%A6+Again+(feat.+Tyler,+The+Creator)",
      streamable: "0",
      artist: {
        name: "The Weeknd",
        mbid: "c8b03190-306c-4120-bb0b-6f2ebfc06ea9",
        url: "https://www.last.fm/music/The+Weeknd",
      },
      image: [[Object], [Object], [Object], [Object]],
      "@attr": { rank: "40" },
    },
    {
      name: "Pray For Me (with Kendrick Lamar)",
      playcount: "3420866",
      listeners: "412643",
      url: "https://www.last.fm/music/The+Weeknd/_/Pray+For+Me+(with+Kendrick+Lamar)",
      streamable: "0",
      artist: {
        name: "The Weeknd",
        mbid: "c8b03190-306c-4120-bb0b-6f2ebfc06ea9",
        url: "https://www.last.fm/music/The+Weeknd",
      },
      image: [[Object], [Object], [Object], [Object]],
      "@attr": { rank: "41" },
    },
    {
      name: "Secrets",
      playcount: "3910888",
      listeners: "412343",
      url: "https://www.last.fm/music/The+Weeknd/_/Secrets",
      streamable: "0",
      artist: {
        name: "The Weeknd",
        mbid: "c8b03190-306c-4120-bb0b-6f2ebfc06ea9",
        url: "https://www.last.fm/music/The+Weeknd",
      },
      image: [[Object], [Object], [Object], [Object]],
      "@attr": { rank: "42" },
    },
    {
      name: "Save Your Tears (Remix) (with Ariana Grande) - Bonus Track",
      playcount: "2281944",
      listeners: "410221",
      url: "https://www.last.fm/music/The+Weeknd/_/Save+Your+Tears+(Remix)+(with+Ariana+Grande)+-+Bonus+Track",
      streamable: "0",
      artist: {
        name: "The Weeknd",
        mbid: "c8b03190-306c-4120-bb0b-6f2ebfc06ea9",
        url: "https://www.last.fm/music/The+Weeknd",
      },
      image: [[Object], [Object], [Object], [Object]],
      "@attr": { rank: "43" },
    },
    {
      name: "dawn FM",
      playcount: "2740170",
      listeners: "405440",
      url: "https://www.last.fm/music/The+Weeknd/_/dawn+FM",
      streamable: "0",
      artist: {
        name: "The Weeknd",
        mbid: "c8b03190-306c-4120-bb0b-6f2ebfc06ea9",
        url: "https://www.last.fm/music/The+Weeknd",
      },
      image: [[Object], [Object], [Object], [Object]],
      "@attr": { rank: "44" },
    },
    {
      name: "Scared to Live",
      playcount: "3821268",
      listeners: "404333",
      url: "https://www.last.fm/music/The+Weeknd/_/Scared+to+Live",
      streamable: "0",
      artist: {
        name: "The Weeknd",
        mbid: "c8b03190-306c-4120-bb0b-6f2ebfc06ea9",
        url: "https://www.last.fm/music/The+Weeknd",
      },
      image: [[Object], [Object], [Object], [Object]],
      "@attr": { rank: "45" },
    },
    {
      name: "Snowchild",
      playcount: "3877450",
      listeners: "395050",
      url: "https://www.last.fm/music/The+Weeknd/_/Snowchild",
      streamable: "0",
      artist: {
        name: "The Weeknd",
        mbid: "c8b03190-306c-4120-bb0b-6f2ebfc06ea9",
        url: "https://www.last.fm/music/The+Weeknd",
      },
      image: [[Object], [Object], [Object], [Object]],
      "@attr": { rank: "46" },
    },
    {
      name: "Escape From LA",
      playcount: "4158028",
      listeners: "392878",
      url: "https://www.last.fm/music/The+Weeknd/_/Escape+From+LA",
      streamable: "0",
      artist: {
        name: "The Weeknd",
        mbid: "c8b03190-306c-4120-bb0b-6f2ebfc06ea9",
        url: "https://www.last.fm/music/The+Weeknd",
      },
      image: [[Object], [Object], [Object], [Object]],
      "@attr": { rank: "47" },
    },
    {
      name: "Faith",
      playcount: "4908600",
      listeners: "390083",
      url: "https://www.last.fm/music/The+Weeknd/_/Faith",
      streamable: "0",
      artist: {
        name: "The Weeknd",
        mbid: "c8b03190-306c-4120-bb0b-6f2ebfc06ea9",
        url: "https://www.last.fm/music/The+Weeknd",
      },
      image: [[Object], [Object], [Object], [Object]],
      "@attr": { rank: "48" },
    },
    {
      name: "Best Friends",
      playcount: "3768326",
      listeners: "382543",
      url: "https://www.last.fm/music/The+Weeknd/_/Best+Friends",
      streamable: "0",
      artist: {
        name: "The Weeknd",
        mbid: "c8b03190-306c-4120-bb0b-6f2ebfc06ea9",
        url: "https://www.last.fm/music/The+Weeknd",
      },
      image: [[Object], [Object], [Object], [Object]],
      "@attr": { rank: "49" },
    },
    {
      name: "Tell Your Friends",
      playcount: "3451223",
      listeners: "381095",
      url: "https://www.last.fm/music/The+Weeknd/_/Tell+Your+Friends",
      streamable: "0",
      artist: {
        name: "The Weeknd",
        mbid: "c8b03190-306c-4120-bb0b-6f2ebfc06ea9",
        url: "https://www.last.fm/music/The+Weeknd",
      },
      image: [[Object], [Object], [Object], [Object]],
      "@attr": { rank: "50" },
    },
  ]

  // const songs = await fetchTracks()

  if (songs.length === 0) {
    return <div className="mt-4 text-neutral-400">No songs available.</div>
  }

  return (
    <div
      className="
        mt-4
        grid
        grid-cols-2
        gap-4
        sm:grid-cols-3
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-8
      "
    >
      {songs.map((item: any) => (
        <SongItem onClick={() => {}} key={item["@attr"].rank} data={item} />
      ))}
    </div>
  )
}

export default PageContent
