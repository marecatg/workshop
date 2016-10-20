<script>

               $(function() {
              $.ajax({
                type:           "GET",
                url: "http://workshop.gaetan-marecat.fr/api/",
                dataType: 'json'
              }).success(function(data) {
                $('#email').append(data.email);
                $('#pwd').append(data.password);
                $('#infoduree').append(data.duree);
                $('#infoadresse').append(data.adresse);
              }).error(function(err){
                console.log(err);
              });

            });
            </script>