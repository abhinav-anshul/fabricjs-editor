import React from "react"
import useAppContext from "../hooks/useAppContext"

let images = [
  {
    id: "1354545637",
    title:
      "The rising up arrow on the mountain with sunlight from behind. Leadership and success Concept. The arrow flew up along the hillside shape like a business chart with increased profit.",
    url: "https://media.gettyimages.com/photos/the-rising-up-arrow-on-the-mountain-with-sunlight-from-behind-and-picture-id1354545637?b=1&k=20&m=1354545637&s=170x170&h=un2BxYceY3xOIBDsQVslCNBIBo42YOlYdAAlr9eFO_Q=",
    mainUrl:
      "https://media.gettyimages.com/photos/the-rising-up-arrow-on-the-mountain-with-sunlight-from-behind-and-picture-id1354545637?b=1&k=20&m=1354545637&s=612x612&h=hACM-f0GEW1OWt7o9j63x0JJAndoBxXLwqxMcdoscPo=",
    orientation: "Horizontal",
    source: 0,
    aspectRatio: {
      x: 16,
      y: 9,
    },
    dimension: {
      height: 3456,
      width: 4608,
    },
  },
  {
    id: "1078283624",
    title: "Glowing wire-frame graph model.",
    url: "https://media.gettyimages.com/photos/glowing-wireframe-graph-model-picture-id1078283624?b=1&k=20&m=1078283624&s=170x170&h=fYWTUuzW3vNbj_PJdDvM1fUeiDsdAvgegQjgCRtO_cU=",
    mainUrl:
      "https://media.gettyimages.com/photos/glowing-wireframe-graph-model-picture-id1078283624?b=1&k=20&m=1078283624&s=612x612&h=Sml5Yrx1JnjsRwWLT37-yihShJfQUu5F-pgZom-rRT8=",
    orientation: "Horizontal",
    source: 0,
    aspectRatio: {
      x: 16,
      y: 9,
    },
    dimension: {
      height: 3333,
      width: 5000,
    },
  },
  {
    id: "1328631070",
    title:
      "Statistic Mountain Logo Template Design Vector, Emblem, Design Concept, Creative Symbol, Icon",
    url: "https://media.gettyimages.com/vectors/statistic-mountain-logo-template-design-vector-emblem-design-concept-vector-id1328631070?b=1&k=20&m=1328631070&s=170x170&h=FHC67_K59Yjel3rwxtr9OCvYGwRR-NYEZr6aXcBKPis=",
    mainUrl:
      "https://media.gettyimages.com/vectors/statistic-mountain-logo-template-design-vector-emblem-design-concept-vector-id1328631070?b=1&k=20&m=1328631070&s=612x612&h=3S6HrxwOiJbJ44d80CagR0xcuVqRMylSuzSnNDBhDIQ=",
    orientation: "Horizontal",
    source: 0,
    aspectRatio: {
      x: 16,
      y: 9,
    },
    dimension: {
      height: 2500,
      width: 3750,
    },
  },
]

const ImagesItem = () => {
  const { setActiveDragDropItem } = useAppContext()

  const handleAddImg = (data) => {
    let options = {
      type: "image",
      src: data?.mainUrl,
      metadata: {
        top: 10,
        left: 10,
      },
    }
    setActiveDragDropItem(options)
  }

  return (
    <div>
      <ul>
        {images.map((item, index) => (
          <li key={index}>
            <img
              crossOrigin="anonymous"
              src={item.mainUrl}
              alt="img"
              height={"100px"}
              width="100px"
              draggable={true}
              onDragStart={() => handleAddImg(item)}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ImagesItem
