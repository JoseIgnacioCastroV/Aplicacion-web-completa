using Servidor.Models;

namespace Servidor.Controllers;
public class EventosController
{
    private static List<Eventos> eventos = new List<Eventos>(){
        new Eventos(1,"Coldplay",2,"¡Gran presentacion de coldplay en chile!","20/09/2022","19:00","Activo","https://img.vggcdn.net/img/cat/11654/1/37.jpg","https://www.viagogo.com/cl/Entradas-Conciertos/Indie-Rock/Coldplay-Entradas/E-150205399?qty=1"),
        new Eventos(2,"Star Wars sinfonico",1,"Llega a Chile un espectáculo multitudinario en el que podrás disfrutar de las piezas musicales más icónicas de toda la Saga de Star Wars, interpretadas por una monumental Orquesta Sinfónica de 90 músicos más coros. Además, presenciarás electrizantes duelos con Lightsabers; “Jedi vs Sith”, ¿Quién ganará esta vez?","26/06/2022","18:00","Activo","https://www.radiotouchtv.cl/wp-content/uploads/2022/06/Afiche-StarWarsSinfonico.jpg", "https://www.radiotouchtv.cl/evento/star-wars-sinfonico-en-teatro-caupolican-dia-1/"),
        new Eventos(3,"Harry Styles, Love in tour",3,"HARRY STYLES HA ANUNCIADO LAS NUEVAS FECHAS DE SU LOVE ON TOUR","01/12/2022","12:30","Activo","https://cdn.puntoticket.com/especiales/dgm109_harry-styles/img/landing_harry-portada2.jpg","https://www.puntoticket.com/harry-styles")

    };
    public List<Eventos> getAll()
    {
        return eventos;
    }

 public List<Eventos> Filtrar(int id){
    return eventos.FindAll(prod=>prod.Ubicacion == id);
 }

}