import { z } from "zod";

const regexAlphabeth = new RegExp(/^[0-9.-]*$/);

// export const findLocationValidationLatLong = z.object({
//   coordinates: z.array(
//     z
//       .object({
//         latitude: z
//           .string()
//           .regex(regexAlphabeth,{message:'Required a number'})
//           .min(4, { message: "Required and min 4 digit number" }),
//         longitude: z
//           .string()
//           .regex(regexAlphabeth,{message:'Required a number'})
//           .min(4, { message: "Required and min 4 digit numbers" }),
//       })
//   ),
// });

// export const findLocationValidationUtm = z.object({
//   coordinates: z.array(
//     z.object({
//       latitude: z
//         .string()
//         .regex(regexAlphabeth,{message:'Required a number'})
//         .min(4, { message: "Required and min 4 digit number" }),
//       longitude: z
//         .string()
//         .regex(regexAlphabeth,{message:'Required a number'})
//         .min(4, { message: "Required and min 4 digit numbers" }),
//       zone: z.string({ message: "Required" }),
//       row: z.string({ message: "Required" }),
//     })
//   ),
// });

export const findLocationValidationUtm = z.object({
  latitude: z
    .string()
    .regex(regexAlphabeth, { message: "Required a number" })
    .min(4, { message: "Required and min 4 digit number" }),
  longitude: z
    .string()
    .regex(regexAlphabeth, { message: "Required a number" })
    .min(4, { message: "Required and min 4 digit numbers" }),
  zone: z.string({ message: "Required" }),
  row: z.string({ message: "Required" }),
});

export const findLocationValidationLatLong = z.object({
  latitude: z
    .string()
    .regex(regexAlphabeth, { message: "Required a number" })
    .min(4, { message: "Required and min 4 digit number" }),
  longitude: z
    .string()
    .regex(regexAlphabeth, { message: "Required a number" })
    .min(4, { message: "Required and min 4 digit numbers" })
});