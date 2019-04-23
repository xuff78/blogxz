<template>
    <div id="map">

    </div>
</template>

<script>
    import Map from 'ol/Map';
    import View from 'ol/View';
    import TileLayer from 'ol/layer/Tile';
    import XYZ from 'ol/source/XYZ';

    export default {
        name: 'home',
        components: {
        },
        mounted(){
            let map=new Map({
                target: 'map',
                layers: [
                    new TileLayer({
                        source: new XYZ({
                            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                        })
                    })
                ],
                view: new View({
                    center: [0, 0],
                    zoom: 2
                })
            });
        },
        methods: {

        }
    }
</script>
<style scoped>
#map{
    width: 100%;
    height: 600px;
}
</style>
