"use client";

import { ImageStrip, type StripImage } from "./ImageStrip";

type FunGroup = {
  id: string;
  title: string;
  credit?: string;
  images: StripImage[];
};

// Each group renders as its own horizontal strip with a small title/credit
// line above it — good fit for a set of photos from one event or piece,
// as opposed to a single unrelated snapshot (which can just be a
// one-image group with no credit).
const GROUPS: FunGroup[] = [
  {
    id: "dream-machine",
    title: "Lincoln Center: DreamMachine VR Installation/Experience",
    images: [
      { src: "/fun/dream-machine/dream-01.jpg", alt: "Lincoln Center's Summer for the City stage with disco ball rigging in daylight" },
      { src: "/fun/dream-machine/dream-02.jpg", alt: "Visitors seated at illuminated tables wearing VR headsets" },
      { src: "/fun/dream-machine/dream-03.jpg", alt: "Purple-lit stage with a red paint-splash projection and greenery installation" },
      { src: "/fun/dream-machine/dream-04.jpg", alt: "Crowd gathered at dusk beneath the disco ball during a live performance" },
      { src: "/fun/dream-machine/dream-05.jpg", alt: "Iridescent 3D avatar rendered inside the DreamMachine VR world" },
      { src: "/fun/dream-machine/dream-06.jpg", alt: "Close-up of VR controllers and headset resting on a lit table" },
      { src: "/fun/dream-machine/dream-07.jpg", alt: "Rows of VR headsets lined up and ready for visitors" },
      { src: "/fun/dream-machine/dream-logo.jpg", alt: "DreamMachine event logo" },
    ],
  },
  {
    id: "guggenheim-float",
    title: "Guggenheim Late Shift: FLOAT",
    credit:
      "Photos: Madison Jaet, Marc Parroquin, and Filip Wolak © Solomon R. Guggenheim Foundation",
    images: [
      { src: "/fun/guggenheim-float/float-01.jpg", alt: "Inflatable sculptures on view in the rotunda" },
      { src: "/fun/guggenheim-float/float-02.jpg", alt: "Inflatable sculptures viewed from below the museum's spiral" },
      { src: "/fun/guggenheim-float/float-03.jpg", alt: "Attendee holding an event program in the rotunda" },
      { src: "/fun/guggenheim-float/float-04.jpg", alt: "Visitors seated, viewing the installation" },
      { src: "/fun/guggenheim-float/float-05.jpg", alt: "Visitors talking beside two crossed inflatable forms" },
      { src: "/fun/guggenheim-float/float-06.jpg", alt: "Looking up through the museum's spiral toward the skylight" },
      { src: "/fun/guggenheim-float/float-07.jpg", alt: "Aerial view of the rotunda floor during the event" },
      { src: "/fun/guggenheim-float/float-08.jpg", alt: "Aerial view of the installation and museum ramps" },
      { src: "/fun/guggenheim-float/float-09.jpg", alt: "Close-up of three inflatable sculptural forms" },
      { src: "/fun/guggenheim-float/float-10.jpg", alt: "View across the museum's spiral galleries" },
      { src: "/fun/guggenheim-float/float-11.jpg", alt: "Event signage for Late Shift: Float" },
      { src: "/fun/guggenheim-float/float-poster.png", alt: "FLOAT event poster" },
      { src: "/fun/guggenheim-float/float-12.jpg", alt: "Attendees at the museum railing during the kite procession" },
    ],
  },
];

export function FunThings() {
  return (
    <div className="space-y-14">
      {GROUPS.map((group) => (
        <div key={group.id}>
          <div className="mb-5">
            <h3 className="font-display text-display-sm italic text-signal">{group.title}</h3>
            {group.credit && (
              <p className="mt-1.5 font-mono text-caption text-ink-40">{group.credit}</p>
            )}
          </div>
          <ImageStrip images={group.images} />
        </div>
      ))}
    </div>
  );
}