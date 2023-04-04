import { defineStore } from "pinia";
import axios from "axios";
import type { CampInterface } from "../interfaces/Camp.Interface";

export interface ReservationState {
  //forms display
  activeForm: boolean;
  mapCenter: [number, number];
  toggleFeedbackMsg: boolean;
  feedbackMsg: string;

  //filters
  filters: {
    arrivalDate: Date;
    nightsIn: number;
    services: string;
    amp: number;
    campLength: number;
  };

  //camps on map
  camps: CampInterface[];

  //selected camp
  selectedCamp: CampInterface;

  //info booking
  bookingInfo: {
    // campId: string;
    wantedDates: Date[];
    name: string;
    email: string;
    phone: string;
    equipment: string;
    card: {
      name: string;
      cardNumber: string;
      cvv: string;
      expiration: string;
    };
  };
}

export const useReservation = defineStore("reservation", {
  state: () => ({
    activeForm: false,
    mapCenter: [48.52272, -64.21673],
    toggleFeedbackMsg: false,
    feedbackMsg: "",
    arrivalDate: new Date(),
    nightsIn: 1,
    filters: {
      services: "0",
      amp: 0,
      campLength: 0,
    },
    selectedCamp: {} as CampInterface,
    bookingInfo: {
      // campId: '',
      wantedDates: [],
      name: "",
      email: "",
      phone: "",
      equipment: "",
      card: {
        name: "",
        cardNumber: "",
        cvv: "",
        expiration: "",
      },
    },
    camps: [],
  }),

  actions: {
    resetFields() {
      this.arrivalDate = new Date();
      this.nightsIn = 1;
      this.filters.services = "0";
      this.filters.amp = 0;
      this.filters.campLength = 0;
      this.bookingInfo.name = "";
      this.bookingInfo.email = "";
      this.bookingInfo.phone = "";
      this.bookingInfo.equipment = "";
      this.bookingInfo.card.name = "";
      this.bookingInfo.card.cardNumber = "";
      this.bookingInfo.card.cvv = "";
      this.bookingInfo.card.expiration = "";
    },
    
    getWantedDates() {
      const wantedDates = [this.arrivalDate];
      for (let i = 1; i < this.nightsIn; i++) {
        wantedDates.push(
          new Date(this.arrivalDate.getTime() + i * 24 * 60 * 60 * 1000)
        );
      }
      return wantedDates;
    },

    async fetchCamps() {
      try {
        const data = await axios.get(`https://devlo15.team/api/camp`, {
          params: {
            wantedDates: this.getWantedDates(),
            filters: {
              services: this.filters.services,
              amps: this.filters.amp,
              campLength: this.filters.campLength,
            },
          },
        });

        this.camps = data.data;
      } catch (e) {
        console.log(e);
      }
    },

    async confirmReservation() {
      // SEND INFO TO SERVER
      this.feedbackMsg = "";
      this.toggleFeedbackMsg = false;
      this.validation();
      // try {
      //   const data = await axios.post(`/api/reservation`, {
      //     params: {
      //       booking: {
      //         campId: this.selectedCamp.id,
      //         wantedDates: this.getWantedDates(),
      //         name: this.bookingInfo.name,
      //         email: this.bookingInfo.email,
      //         phone: this.bookingInfo.phone,
      //         equipment: this.bookingInfo.equipment,
      //         card: {
      //           name: this.bookingInfo.card.name,
      //           cardNumber: this.bookingInfo.card.cardNumber,
      //           cvv: this.bookingInfo.card.cvv,
      //           expiration: this.bookingInfo.card.expiration,
      //         }
      //       }
      //     }
      //   })
      //   console.log(data);

      // } catch (e) {
      //   console.log(e)
      // }
    },

    validation() {
      // FOR DATES
      if (this.arrivalDate === new Date()) {
        this.feedbackMsg = "S'il-vous-plaît selectionner une date d'arrivée";
        this.toggleFeedbackMsg = true;
        return;
      }

      // FOR NAME
      let nameArray = this.bookingInfo.name.split(" ");
      if (nameArray.length < 2 || !this.bookingInfo.name) {
        this.feedbackMsg = "S'il-vous-plaît entrer votre nom complet";
        this.toggleFeedbackMsg = true;
        return;
      }
      if (nameArray[0].length < 3 || nameArray[1].length < 3) {
        this.feedbackMsg = "Chaque nom doit contenir un minimum de 3 caractères";
        this.toggleFeedbackMsg = true;
        return;
      }

      // FOR EMAIL
      let emailRegex =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!this.bookingInfo.email || !emailRegex.test(this.bookingInfo.email)) {
        this.feedbackMsg = "S'il-vous-plaît entrer une adresse courriel valide";
        this.toggleFeedbackMsg = true;
        return;
      }

      // FOR PHONE
      let phoneRegex = /^[0-9]{10}$/;
      if (!this.bookingInfo.phone ||this.bookingInfo.phone.length < 10 ||!phoneRegex.test(this.bookingInfo.phone)) {
        this.feedbackMsg = "Le numéro de téléphone doit contenir 10 chiffres";
        this.toggleFeedbackMsg = true;
        return;
      }

      // FOR EQUIPMENT
      if (!this.bookingInfo.equipment) {
        this.feedbackMsg ="S'il-vous-plaît selectionner l'équipement vous utilisez";
        this.toggleFeedbackMsg = true;
        return;
      }

      // FOR CARD NAME
      if (!this.bookingInfo.card.name) {
        this.feedbackMsg = "S'il-vous-plaît entrer le nom sur la carte";
        this.toggleFeedbackMsg = true;
        return;
      }

      // FOR CARD NUMBER
      let cardNumberRegex = /^[0-9]{16}$/;
      if (!this.bookingInfo.card.cardNumber || this.bookingInfo.card.cardNumber.length < 16 || !cardNumberRegex.test(this.bookingInfo.card.cardNumber)) {
        this.feedbackMsg = "Le numéro de carte doit être composé de 16 chiffres.";
        this.toggleFeedbackMsg = true;
        return;
      }

      // FOR CVV
      let cvvRegex = /^[0-9]{3}$/;
      if (!this.bookingInfo.card.cvv || this.bookingInfo.card.cvv.length !== 3 || !cvvRegex.test(this.bookingInfo.card.cvv)) {
        this.feedbackMsg = "Le CVV doit contenir 3 chiffres.";
        this.toggleFeedbackMsg = true;
        return;
      }

      // FOR EXPIRATION
      let expirationRegex = /^[0-9]{2}\/[0-9]{2}$/;
      if (!this.bookingInfo.card.expiration || !expirationRegex.test(this.bookingInfo.card.expiration) || this.bookingInfo.card.expiration.length !== 5) {
        this.feedbackMsg = "La date d'expiration doit être au format MM/AA";
        this.toggleFeedbackMsg = true;
        return;
      }

      // FOR CONFIRMATION
      if (this.feedbackMsg === "") {
        this.feedbackMsg = "Votre réservation a été confirmée! Vous recevrez un courriel de confirmation.";
        this.toggleFeedbackMsg = true;
        return;
      }
    },
  },
});
