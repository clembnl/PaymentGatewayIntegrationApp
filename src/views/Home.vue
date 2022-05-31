<template>
    <div class="home">
        <div class="card" @click="submit">
            <div class="img-container">
                <img src="../assets/Stripe_logo.png" alt="Stripe logo" width="250"/>
            </div>
            <stripe-checkout
                ref="checkoutRef"
                mode="payment"
                :pk="publishableKey"
                :line-items="lineItems"
                :success-url="successURL"
                :cancel-url="cancelURL"
                @loading="(v: boolean) => loading = v"
            />
            <p>PAY WITH STRIPE</p>
        </div>
        <div class="card">
            <div class="img-container">
                <img src="../assets/PayPal_logo.png" alt="Paypal logo" width="250"/>
            </div>
            <p>PAY WITH PAYPAL</p>
        </div>
        <div class="card">
            <div class="img-container">
                <img src="../assets/Amazon_logo.png" alt="Amazon logo" width="250"/>
            </div>
            <p>PAY WITH AMAZON</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { StripeCheckout } from '@vue-stripe/vue-stripe';

export default defineComponent({
    components: {
        StripeCheckout
    },
    data() {
        return{
            publishableKey: "pk_test_51KDyZCHbpACDZqsEPbtd09DHObPDpZDbf7LouqB9BJdbIgAPyrE6g228JRgu9bkwRBkFT0neqn2YYqztG4OuWrfa00Ufy7YkAk",
            loading: false,
            lineItems:[
                {
                    price: 'price_1L520rHbpACDZqsEnTbRZUub',
                    quantity: 1
                }
            ],
            successURL: 'http://localhost:8080/success',
            cancelURL: 'http://localhost:8080/error'
        }
    },
    methods: {
        submit() {
            (this.$refs.checkoutRef as any).redirectToCheckout();
            
        }
    }
})
</script>

<style scoped>
.home {
    display: flex;
    justify-content: space-between;
}

.card{
    border: 1px solid rgb(205, 205, 205);
    border-radius: 5px;
    background-color: rgb(225, 225, 225);
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 10px;
    color: rgb(150, 150, 150);
    height: 160px;
    position: relative;
}

.card p {
    position: absolute;
    bottom: 0;
    left: 31%;
    font-size: 0.8em;
}

.card:hover {
    outline: 2px solid rgb(111, 176, 219);
    background-color: rgb(193, 226, 250);
    color: black;
}
</style>