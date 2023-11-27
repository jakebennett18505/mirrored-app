<script>
  // Import necessary components
  import ArtGallery from "/src/components/art/ArtGallery.svelte";
  import ArtSocialIcons from "/src/components/ArtSocialIcons.svelte";

  // Extract the 'artwork' data from the 'data' prop
  export let data;
  const { artwork } = data;
</script>

<!-- Artwork image section -->
<section class="section">
  <div class="container" data-type="narrow">
    <div class="grid">
      <div class="image-carousel">
        <ArtGallery {artwork} />
      </div>
      <img class="artwork-image" src={artwork.images[0]} alt="Artwork" />
      <ArtSocialIcons />
    </div>
  </div>
</section>

<!-- Artwork information section -->
<section class="section">
  <div class="container" data-type="narrow">
    <div class="flex-group">
      <div class="info-main flow">
        <div>
          <h1 class="subtitle-1">{artwork.title}</h1>
          <p class="subtitle-3 fw-bold">€{artwork.price}</p>
          <p class="subtitle-3">{artwork.brand}</p>
        </div>
        <p class="description">{artwork.description}</p>
      </div>
      <div class="specifications">
        <table>
          <tr>
            <th>Painting:</th>
            <td>Acrylic on Canvas</td>
          </tr>
          <tr>
            <th>Size:</th>
            <td>61 W x 61 H x 3.8 D cm</td>
          </tr>
          <tr>
            <th>Created:</th>
            <td>2022</td>
          </tr>
          <tr>
            <th>Subjects:</th>
            <td>Abstract</td>
          </tr>
          <tr>
            <th>Materials:</th>
            <td>Canvas</td>
          </tr>
          <tr>
            <th>Styles:</th>
            <td>Abstract, Conceptual</td>
          </tr>
          <tr>
            <th>Mediums:</th>
            <td>Acrylic</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</section>

<style>
  /* Styles for image section */
  .grid {
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    max-height: 600px;
    flex-direction: column;
  }

  .image-carousel {
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    display: none;
  }

  .image-carousel::-webkit-scrollbar {
    display: none;
  }

  .artwork-image {
    flex: 1;
    object-fit: contain;
    max-height: 400px;
  }

  /* Styles for information section */
  th {
    text-align: left;
    font-weight: 600;
    padding-right: 5px;
  }

  .specifications {
    max-width: 350px;
  }

  .info-main {
    flex: 1;
    min-width: 65%;
  }

  @media (min-width: 45em) {
    /* Apply styles for screens wider than 45em (720px) */
    .grid {
      flex-direction: row;
    }

    .image-carousel {
      display: block;
    }

    .artwork-image {
      max-height: 100%;
    }
  }
</style>
