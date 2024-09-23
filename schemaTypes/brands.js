import { defineField, defineType } from "sanity";

export const brands = defineType({
    name: "brands",
    title: "Brands",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
    ],
})