import { defineField, defineType } from "sanity";

export const abouts = defineType({
    name: "abouts",
    title: "Abouts",
    type: "document",
    fields: [    
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "description",
            title: "Description",
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