export default {
    name: "fish",
    title: "Fish",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Fish Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
        },
        {
            name: "fisherman",
            title: "Fisherman",
            type: "reference",
            to: { type: "fisherman" },
        },
        {
            name: "mainImage",
            title: "Fish Main Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "scientificName",
            title: "Scientific Name",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "string",
        },
        {
            name: "habitat",
            title: "Habitat",
            type: "string",
        },
        {
            name: "length",
            title: "Length",
            type: "number",
        },
        {
            name: "weight",
            title: "Weight",
            type: "number",
        },
        {
            name: "bait",
            title: "Bait",
            type: "array",
            of: [{type: "string"}]
        },
        {
            name: "status",
            title: "Status",
            type: "string",
            options: {
                list: ["Endangered", "Threatened", "na"],
            },
        },
    ]
}