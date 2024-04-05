import { Server, Member, Profile } from "@prisma/client";

export type ServerWithMembersWithProfiles = Server & {
  members: (Member & { profile: Profile })[];
};
export type ProfileDetails = Profile & {
  id: String;
};
