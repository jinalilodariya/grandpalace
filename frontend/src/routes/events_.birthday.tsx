import { createFileRoute, redirect } from "@tanstack/react-router";

// "Celebrate Birthday" in the Events dropdown links here for a stable
// /events/birthday URL, but birthday content already lives at
// /birthday-package — redirect instead of duplicating the page.
export const Route = createFileRoute("/events_/birthday")({
  loader: () => {
    throw redirect({ to: "/birthday-package" });
  },
});
