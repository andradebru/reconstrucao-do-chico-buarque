import Vue from "vue";

var logged_user = null;

function mockasync(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ data: data }), 600);
  });
}

const api = {
  login(username, password) {
    if (password) {
      logged_user = {
        username: username,
        first_name: "Mark",
        last_name: "Zuckerberg",
        email: "zuck@facebook.com",
        notifications_enabled: true,
        permissions: {
          ADMIN: username == "admin",
          STAFF: username == "admin"
        }
      };
    }
    return mockasync(logged_user);
  },
  logout() {
    logged_user = null;
    return mockasync({});
  },
  whoami() {
    return mockasync(
      logged_user
        ? {
            authenticated: true,
            user: logged_user
          }
        : { authenticated: false }
    );
  }, 
  list_gigs() {
    return mockasync({
      gigs: [
        {
          // id: 0,
          artist: "Metallica",
          imgsrc:
            "https://i0.wp.com/guitarload.com.br/wp-content/uploads/2021/09/metallica-tributo-black-album.jpg?fit=1200%2C628&ssl=1",
          // flex: 12,
          date: "02/05/23"
        },
        {
          // id: 1,
          artist: "Wesley Safadao",
          imgsrc:
            "https://vejasp.abril.com.br/wp-content/uploads/2017/04/wesley-safadao.jpg",
          // flex: 6,
          date: "02/05/23"

        },
        {
          // id: 2,
          artist: "Ney Matogrosso",
          imgsrc:
            "https://esquinamusical.com.br/wp-content/uploads/2022/02/neymatogrosso.jpg",
          // flex: 6,
          date: "02/05/23"
        }
      ]
    });
  },
  add_gig(artist, imgsrc, date) {
    return mockasync({
      // id: this.gigs.length,
      artist: artist,
      imgsrc: imgsrc,
      date: date
    })
  },
};

export default api;
