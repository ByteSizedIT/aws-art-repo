import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "artUploads",
  access: (allow) => ({
    "artUploads/*": [
      allow.guest.to(["read"]),
      allow.groups(["ADMIN"]).to(["read", "write", "delete"]),
    ],
  }),
});
