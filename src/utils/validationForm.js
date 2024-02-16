import { z } from "zod";

export const findLocationValidationLatLong = z.object({
  coordinates: z.array(
    z.object({
      latitude: z
        .string({
          required_error: "Field is required",
        })
        .min(4, { message: "Required and min 4 digit number" }),
      longitude: z
        .string()
        .min(4, { message: "Required and min 4 digit numbers" }),
    })
  ),
});

export const findLocationValidationUtm = z.object({
  coordinates: z.array(
    z.object({
      latitude: z
        .string({
          required_error: "Field is required",
        })
        .min(4, { message: "Required and min 4 digit number" }),
      longitude: z
        .string()
        .min(4, { message: "Required and min 4 digit numbers" }),
      zone: z.string({ message: "Required" }),
      row: z.string({ message: "Required" }),
    })
  ),
});
